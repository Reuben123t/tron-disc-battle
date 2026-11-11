const { Client } = require('pg');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const connectionString = 'postgres://postgres.sspgvgpfhnucciizwtzj:a73wkiqohEd4LRJG@aws-0-ap-south-1.pooler.supabase.com:6543/postgres';

async function main() {
    const client = new Client({
        connectionString,
        ssl: { rejectUnauthorized: false }
    });

    try {
        await client.connect();
        console.log('Connected to Supabase PostgreSQL database.');

        // 1. Remove all bots and seeded fictional characters
        const deleteRes = await client.query(`
            DELETE FROM public.leaderboard
            WHERE LOWER(TRIM(player_name)) IN ('flynn', 'rinzler', 'tron', 'quorra', 'anon', 'clu', 'bit', 'sark', 'bot 1', 'bot 2', 'bot 3');
        `);
        console.log(`Removed ${deleteRes.rowCount} bot records from leaderboard.`);

        // 2. Remove duplicates for human players, keeping the record with highest win_score
        await client.query(`
            DELETE FROM public.leaderboard a
            USING public.leaderboard b
            WHERE a.id < b.id 
              AND LOWER(TRIM(a.player_name)) = LOWER(TRIM(b.player_name))
              AND a.win_score <= b.win_score;
        `);

        // 3. Query remaining real human player records
        const remaining = await client.query(`
            SELECT id, player_name, win_score, kills, arena, created_at
            FROM public.leaderboard
            ORDER BY win_score DESC;
        `);
        console.log('Remaining real human player leaderboard records:');
        console.table(remaining.rows);

    } catch (err) {
        console.error('Error cleaning leaderboard:', err);
    } finally {
        await client.end();
    }
}

main();
