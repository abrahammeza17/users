async function obtenerUsuarios() {
  try {
    const respuesta = await fetch ("https://jsonplaceholder.typicode.com/users");
  
    if (!respuesta.ok) {
      throw new Error ("La peticion ha fallado");
    }
    
    const usuarios = await respuesta.json();
    
    console.log(usuarios[0].name);
    console.log(usuarios[0].email);
    console.log(usuarios[0].address.city);
    
    
  }catch (error) {
    console.log(error);
    }
  }

obtenerUsuarios();