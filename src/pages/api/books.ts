import axios from "axios";

interface ImageDTO {
  smallThumbnail: string;
  thumbnail: string;
}

interface VolumeDTO {
  title: string;
  authors: string[];
  description?: string;
  imageLinks?: ImageDTO;
}

export interface BooksDTO {
  volumeInfo: VolumeDTO;
}

export interface IGetBooks {
  items: BooksDTO[];
}

export const getBooksList = async () => {
  const response = await axios.get<IGetBooks>(
    "https://www.googleapis.com/books/v1/volumes?q=beckham&fields=items(volumeInfo(title,description,authors,imageLinks(thumbnail,smallThumbnail)))&maxResults=40",
  );
  console.log(response);
  return response.data;
};
