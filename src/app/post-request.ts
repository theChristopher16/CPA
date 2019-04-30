export class PostRequest {

    apiCode: string;

    constructor(){
        this.apiCode = 'SSBsb3ZlIGJpZyBidXR0cw'; //this is a secret pls dont share
    }

    getApiCode(){
        return this.apiCode;
    }

}
