(() => {

    /* EJEMPLO NO APLICANDO EL PRINCIPIO DE RESPONSABILIDAD UNICA */

    // Forma Corta
    /* class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    } */

    /*
        const person = new Person('Daniel', 'M', new Date('1985-10-21'));
        console.log({person}); 
    */

    /** ========================================================================= */

    type Gender = 'M' | 'F';

    // Forma Larga
    class Person {
        public name: string = '';
        public gender: Gender = 'M';
        public birthdate: Date = new Date('1999-11-22');

        constructor( name: string, gender: Gender, birthdate: Date ) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    const person = new Person( 'Daniel_Person', 'M', new Date('1985-10-21') );
    console.log({ person }); 

    /** ========================================================================= */

    class User extends Person {
        public email: string = '';
        public role: string = '';
        public lastAccess: Date = new Date('2022-12-23');
    
        constructor( name: string, gender: Gender, birthdate: Date, 
                     email: string, role: string, lastAccess: Date 
                   ) {
            super(name, gender, birthdate);
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
            this.email = email;
            this.role = role;
            this.lastAccess = lastAccess;
        }

        checkCredentials() {
            return true;
        }
    }

    const user = new User( 'Daniel_User', 'M', new Date('1985-10-21'), 'danipez.02@gmail.com', 'ADMIN', new Date('1985-10-21') );
    console.log({ user }); 

    /** ========================================================================= */

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        
        constructor( workingDirectory: string, lastOpenFolder: string, name: string, 
                     gender: Gender, birthdate: Date, email: string, role: string, 
                     lastAccess: Date 
                ) {

            super(name, gender, birthdate, email, role, lastAccess);
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }
    }

    const userSettings = new UserSettings( '/usr/home', '/home', 'Daniel_User_Settings', 'M', new Date('1985-10-21'), 
                                           'danipez.02@gmail.com', 'ADMIN', new Date('1985-10-21') );
    console.log({ userSettings }); 

})();