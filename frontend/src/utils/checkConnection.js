import supabase from "../supabaseClient";

export default async function checkConnection() {
    try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
            console.error('Could not connect to Supabase:', error.message);
        } else {
            console.log('Connected to Supabase successfully');
        }
    } catch (e) {
        console.error('Unexpected error while connecting to Supabase:', e.message);
    }
}

checkConnection()
console.log('Request completed');