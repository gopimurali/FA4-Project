export class Users {
    constructor(

           public emaiId: string,
           public password: string,
           public uName: string,
           public phoneNo: string,
           public orderId: [{type: number}],
           public prodName: [{type: string}],
           public orders: [
                {
                    olive: number,
                    pol: string,
                }
            ],

    ) {}
}
