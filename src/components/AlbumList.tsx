import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Album, DataEntity } from '../types/Album';

interface Props {
  id: string;
}

const AlbumList = ({ id }: Props) => {
  const [album, setAblum] = useState<Album | undefined>();
  useEffect(() => {
    if (id !== undefined) {
      const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/albums/get-related-artist',
        params: { id: id, l: 'en-US' },
        headers: {
          'X-RapidAPI-Key':
            '06cb72fce5msh32af3b7c03c08b2p199e6cjsnbe1ec3d3d99f',
          'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then(async function (response) {
          return await setAblum(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    return () => {};
  }, [id]);

  return (
    <>
      <div
        className="d-flex flex-column"
        style={{ width: '100%', overflowY: 'scroll' }}
      >
        {album?.data?.map((val) => (
          <div
            key={val.id}
            className="block"
            style={{
              width: '100%',
              minWidth: '100%',
              overflowX: 'scroll',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(8px)',
              padding: '10px',
            }}
          >
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h5>{val.attributes.name}</h5>
                <p>{val.attributes.genreNames}</p>
              </div>
              <button className="btn">
                <a href={val.attributes.url}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                  </svg>
                  PLAY
                </a>
              </button>
            </div>
          </div>
        ))}
        {/* {JSON.stringify(album)} */}
      </div>
    </>
  );
};

export default AlbumList;
