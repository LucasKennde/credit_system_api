declare namespace Express {
  export interface Request {
    user_id: string;
    file?: {
      originalname: string;
      filename: string;
    };
  }
}
