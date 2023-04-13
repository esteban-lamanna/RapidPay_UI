export class User
{    
    name : String | undefined;
    dateOfBirth : Date | undefined;

    static GetUsers(): User[]
    {
        return [      
            {
              name : "esteban",
              dateOfBirth : new Date(1991,8,21)
            }];
    }
}