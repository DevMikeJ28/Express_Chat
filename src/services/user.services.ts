import user from "../models/user.model";

interface SignInDTO {
  userName: String,
  password: String
}

export default class UserServices {
  async signIn = ({userName, password}: SignInDTO) => {
    try {
      if (!userName.length || !password.length) throw new Error("UserName and Password are required!")
    } catch (error) {
      
    }
  }
}