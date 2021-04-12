import * as bcrypt from 'bcryptjs';

export const hash = async (plainText: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(plainText, salt)
  
  return result
}

export const compare = (plainText: string, cypherText: string): boolean => {
  return bcrypt.compareSync(plainText, cypherText)
}