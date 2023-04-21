interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {
    
    fly(): number {
        return 200;
    }
    
    eat(): void {
        throw new Error("Method not implemented.");
    }

}

class Humminbird implements Bird, FlyingBird {
    
    eat(): void {
        throw new Error("Method not implemented.");
    }
    
    fly(): number {
        return 50;
    }

}

class Ostrich implements Bird, RunningBird {
    
    run(): void {
        throw new Error("Method not implemented.");
    }

    eat(): void {
        throw new Error("Method not implemented.");
    }

}

class Penguin implements Bird, SwimmerBird {
    
    swim(): void {
        throw new Error("Method not implemented.");
    }

    eat(): void {
        throw new Error("Method not implemented.");
    }

}