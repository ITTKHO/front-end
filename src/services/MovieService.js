export async function getAllMovies() {

    try{
        //const response = await fetch('/api/users');
        const response = await fetch('http://localhost:4000/api/movie/all');
        //const response = await fetch('/api/movie/all');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createMovie(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}
