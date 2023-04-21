(() => {

    // Aplicando El Principio De Responsabilidad Unica
    // Priorizar La Composición Frente A La Herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    // Forma Larga
    class Person {
        public birthdate: Date = new Date('1999-11-22');
        public gender: Gender = 'M';
        public name: string = '';

        constructor( { birthdate, gender, name }: PersonProps ) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    const person = new Person( { birthdate: new Date('1985-10-21'), gender: 'M', name: 'Daniel_Person' } );
    console.log({ person });
    
    /** ========================================================================= */

    interface UserProps {
        email      : string, 
        role      : string, 
    }

    class User {
        public email: string = '';
        public role: string = '';
    
        constructor( { email, role } : UserProps ) {
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    const user = new User( { email: 'danipez.02@gmail.com', role:'ADMIN' } );
    console.log({ user });

    /** ========================================================================= */

    interface SettingsProps {
        lastOpenFolder    : string; 
        workingDirectory  : string; 
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { lastOpenFolder, workingDirectory } : SettingsProps ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new Settings( { lastOpenFolder: '/home', workingDirectory: '/usr/home' } );
    console.log({ userSettings }); 

    /** ========================================================================= */

    interface UserSettingsProps {
        birthdate        : Date, 
        email            : string, 
        gender           : Gender, 
        lastOpenFolder   : string,
        name             : string,
        role             : string,
        workingDirectory : string,
    }

    class UserSettins {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor( { birthdate, gender, name,
                       email, role,
                       lastOpenFolder, workingDirectory
                    } : UserSettingsProps) {
            this.person = new Person( { birthdate, gender, name } );
            this.user = new User( { email, role } );
            this.settings = new Settings( { lastOpenFolder, workingDirectory } );
        }
    }

})();