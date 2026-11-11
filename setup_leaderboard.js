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

        // Create table
        await client.query(`
            CREATE TABLE IF NOT EXISTS public.leaderboard (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                player_name TEXT NOT NULL,
                win_score INTEGER NOT NULL DEFAULT 0,
                kills INTEGER NOT NULL DEFAULT 0,
                arena TEXT DEFAULT 'coliseum',
                created_at TIMESTAMPTZ DEFAULT now()
            );

            -- Enable RLS
            ALTER TABLE public.leaderboard ENABLE ROW LEVEL SECURITY;

            -- Drop existing policies if any
            DROP POLICY IF EXISTS "Allow anonymous read" ON public.leaderboard;
            DROP POLICY IF EXISTS "Allow anonymous insert" ON public.leaderboard;
            DROP POLICY IF EXISTS "Allow anonymous update" ON public.leaderboard;

            -- Create policies for anon and authenticated access
            CREATE POLICY "Allow anonymous read" ON public.leaderboard
                FOR SELECT USING (true);

            CREATE POLICY "Allow anonymous insert" ON public.leaderboard
                FOR INSERT WITH CHECK (true);

            CREATE POLICY "Allow anonymous update" ON public.leaderboard
                FOR UPDATE USING (true);

            -- Index for top leaderboard queries
            CREATE INDEX IF NOT EXISTS idx_leaderboard_win_score ON public.leaderboard (win_score DESC, kills DESC);
        `);

        console.log('Leaderboard table and policies created successfully.');

        // Insert initial Hall of Fame if empty
        const countRes = await client.query('SELECT COUNT(*) FROM public.leaderboard');
        const count = parseInt(countRes.rows[0].count, 10);
        console.log('Current rows in leaderboard:', count);

        if (count === 0) {
            await client.query(`
                INSERT INTO public.leaderboard (player_name, win_score, kills, arena) VALUES
                ('Flynn', 1250, 15, 'coliseum'),
                ('Rinzler', 1100, 13, 'gauntlet'),
                ('Tron', 980, 11, 'coliseum'),
                ('Quorra', 820, 9, 'hexagon'),
                ('Anon', 650, 7, 'outskirts');
            `);
            console.log('Seeded initial Hall of Fame champion programs.');
        }

    } catch (err) {
        console.error('Error setting up Supabase table:', err);
    } finally {
        await client.end();
    }
}

main();
