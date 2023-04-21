(() => {

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
        birthdate : Date, 
        email     : string, 
        gender    : Gender, 
        lastAccess: Date 
        name      : string, 
        role      : string, 
    }

    class User extends Person {
        public email: string = '';
        public lastAccess: Date = new Date('2022-12-23');
        public role: string = '';
    
        constructor( { birthdate, email, gender, lastAccess, name, role } : UserProps ) {
            super( { name, gender, birthdate } );
            this.lastAccess = lastAccess;
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    const user = new User( { birthdate: new Date('1985-10-21'), email: 'danipez.02@gmail.com', 
                             gender: 'M', lastAccess: new Date('1985-10-21'), name:'Daniel_User', 
                             role: 'ADMIN' } );
    console.log({ user });

    /** ========================================================================= */

    interface UserSettingsProps {
        birthdate         : Date; 
        email             : string; 
        gender            : Gender;
        lastAccess        : Date;
        lastOpenFolder    : string; 
        name              : string;
        role              : string;
        workingDirectory  : string; 
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor( { birthdate, email, gender, lastAccess, lastOpenFolder, 
                       name, role, workingDirectory } : UserSettingsProps
        ) {
            super( { name, gender, birthdate, email, role, lastAccess } );
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings( { birthdate: new Date('1985-10-21'), email: 'danipez.02@gmail.com',
                                             gender: 'M', lastAccess: new Date('1985-10-21'), 
                                             lastOpenFolder: '/home', name: 'Daniel_User_Settings',
                                             role: 'ADMIN', workingDirectory: '/usr/home' 
                                          } );
        console.log({ userSettings }); 

    /** ========================================================================= */

})();