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

export const getBooksList = async (test?: string) => {
  try {
    const response = await axios.get<IGetBooks>(
      "https://www.googleapis.com/books/v1/volumes?",
      {
        params: {
          q: test,
          fields:
            "items(volumeInfo(title,description,authors,imageLinks(thumbnail,smallThumbnail)))",
          maxResults: 38,
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
