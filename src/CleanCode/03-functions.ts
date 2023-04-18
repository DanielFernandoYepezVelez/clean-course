(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getAllMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        title:       string, 
        description: string, 
        rating:      number, 
        cast:        string[]
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    function createActor( fullName: string, birthDate: Date ): boolean {
        
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        
    }

    // Continuar Otras Recomendaciones

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;

    }

})();