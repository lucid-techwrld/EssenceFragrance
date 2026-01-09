import bcrypt from "bcrypt"

class Password {
    async encrypt (password: string){
        let psw: string;
        if(password) {
            const s = await bcrypt.genSalt(10)
            psw = await bcrypt.hash(password, s);
            return psw
        }
        return;
    }

    async decrypt(userPassword: string, password: string) {
        if(!userPassword || !password) {
            return false
        }
        const decoded = await bcrypt.compare(password, userPassword)
        if(!decoded) {
            return false
        }
        return true
    }
}

const PasswordSecurity = new Password

export default PasswordSecurity;
