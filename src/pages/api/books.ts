import axios from "axios";

export interface ImageDTO {
  smallThumbnail: string;
  thumbnail: string;
}

export interface VolumeDTO {
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

export const getBooksList = async (query?: string) => {
  try {
    const response = await axios.get<IGetBooks>(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          q: query,
          fields:
            "items(volumeInfo(title,description,authors,imageLinks(thumbnail,smallThumbnail)))",
          maxResults: 40,
        },
      },
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
