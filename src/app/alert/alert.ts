export class Alert {
    constructor(
    public readonly alertType: AlertType,
    public readonly message: string
    ) {}
    }
    
    export enum AlertType {
    SUCCESS = "alert alert-success",
    WARNING = "alert alert-warning",
    DANGER = "alert alert-danger",
    INFO = "alert alert-primary"
    }
    