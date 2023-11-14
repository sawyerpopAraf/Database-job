class UserService {
    constructor(db) {
        this.client = db.sequelize;
        this.Animal = db.Animal;
        this.Adoption = db.Adoption;
        this.User = db.User;
        
    }

    async create(fullname, username, passwordCombined, role) {
        try {
            const existingUser = await this.User.findOne({
                where: { UserName: username }
            });
            
            if (existingUser) {
                throw new Error("User already exists");
            }
    
            const newUser = await this.User.create({
                FullName: fullname,
                UserName: username,
                Password: passwordCombined,
                Role: role || "member"
            });
            return newUser;
        } 
        catch (error) {
            throw error;
        }
    }
    

    async getAll() {
        return this.User.findAll({
            where: {}
        })
    }
    
    async getOne(userId) {        
        return await this.User.findOne({
            where: {id: userId},
            include: {
                model: this.Adoption,
                through: {
                    attributes: ['AnimalId']
                }, 
                include: {
                    model: this.Animal
                }            
            }
           
        });
    }
    async getOneByName(username) {        
        const user = await this.User.findOne({
            where: { UserName: username },
            include: {
                model: this.Adoption,
                include: {
                    model: this.Animal
                }            
            }
        });
        console.log(user); 
        return user;
    }
   

    async deleteUser(userId) {
        return this.User.destroy({
            where: {id: userId}
        })
    }
}
module.exports = UserService;