import bcrypt from 'bcryptjs'

const hashPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error('Erro ao gerar o hash da senha:' +  (error as Error).message);
  }
}

const comparePassword = async (password: string, hash: string) => {
  try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
  } catch (error) {
    throw new Error('Erro ao comparar senha: ' + (error as Error).message)
  }
}

export { hashPassword, comparePassword }