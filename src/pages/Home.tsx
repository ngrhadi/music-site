import React, { Suspense, useEffect, useState } from 'react';
import {
  useDetailQuery,
  useListMusicQuery,
} from '../redux/features/musics/musicApi';
import { Music } from '../types/musics';
import { ArtistTypes } from '../types/artist';
import AlbumList from '../components/AlbumList';

const Home = () => {
  const [detailSong, setDetailSong] = useState('');
  const { data: detail, isLoading: loadingArtis } = useDetailQuery(
    `/artists/get-details?id=${detailSong}?l=en-us`
  );
  const [artist, setArtis] = useState<ArtistTypes>(detail);
  const { data, error, isLoading } = useListMusicQuery(
    '/songs/list-recommendations?key=484129036&locale=en-US'
  );
  const music = data as Music;

  function handleDetail(id: string[]) {
    setDetailSong(id[0]);
    // setTimeout(() => {
    // }, 300);
  }
  useEffect(() => {
    if (detailSong.length > 1 && detail !== undefined) {
      setArtis(detail);
    }
  }, [detail]);

  console.log(artist);
  console.log(data, 'data');
  console.log(detail, 'detail');

  return (
    <div
      className="d-flex"
      style={{
        width: '100vw',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(8px)',
        height: '100vh',
        zIndex: 4,
      }}
    >
      <div
        // className="card"
        style={{
          position: 'absolute',
          height: '95%',
          width: '100%',
          overflowY: 'scroll',
          marginLeft: '37px',
        }}
      >
        {detailSong.length > 1 ? (
          <div
            style={{
              zIndex: 5,
              position: 'absolute',
              right: '27rem',
            }}
          >
            <div
              style={{
                position: 'fixed',
                width: '20rem',
                height: '100%',
                overflowY: 'scroll',
              }}
            >
              {detail?.data === undefined ?? isLoading ? null : (
                <div style={{ minHeight: '20rem' }}>
                  {artist?.data?.map((val) => (
                    <div key={val.id}>
                      <div
                        style={{
                          position: 'absolute',
                          zIndex: 5,
                          marginTop: '-4.5rem',
                        }}
                      >
                        <div
                          className="d-flex flex-row justify-content-between align-items-center"
                          style={{
                            background: 'rgba(255, 31, 71, 0.81)',
                            backdropFilter: 'blur(8px)',
                            width: '25rem',
                            minHeight: '5rem',
                            position: 'fixed',
                            padding: '1rem',
                          }}
                        >
                          <h4>{val.attributes.name}</h4>
                          <p>{val.attributes.genreNames[0]}</p>
                        </div>
                      </div>
                      <div className="mt-5">
                        {val.relationships.albums.data.map((album) => (
                          <div key={album.id}>
                            <AlbumList id={album.id} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            className="card"
            style={{
              zIndex: 5,
              position: 'absolute',
              right: '27rem',
            }}
          >
            <div
              style={{
                position: 'fixed',
                width: '20rem',
                height: '100%',
                overflowY: 'scroll',
              }}
            >
              {/* <p>No display</p> */}
            </div>
          </div>
        )}
        {music?.tracks.map((val) => (
          <div key={val.key} style={{}}>
            <div
              className="d-flex align-items-start my-2 bg-transparent"
              style={{
                borderRight: '10px solid black',
                borderBottom: '5px solid black',
                width: '35rem',
              }}
            >
              <div
                style={{
                  width: '35rem',
                  position: 'relative',
                  minHeight: '8rem',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 2,
                    right: 0,
                    width: '27%',
                    height: '100%',
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: '100%' }}
                  >
                    <img
                      src={val.images.coverart}
                      width={'120px'}
                      height={'120px'}
                    />
                  </div>
                </div>
                <h6 className="fw-bold text-white">{val.title}</h6>
                <p className="fw-ligth text-danger">
                  {val.subtitle}{' '}
                  <span>
                    <button className="btn rounded">
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
                    </button>
                  </span>
                </p>
                <button
                  className="btn"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '130px',
                  }}
                  onClick={() => handleDetail(val.artists.map((v) => v.adamid))}
                >
                  See Detail..
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* {detailSong !== null && (
        <div
          className="card"
          style={{
            zIndex: 5,
            position: 'absolute',
            right: '27rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'red',
              position: 'sticky',
              width: '20rem',
              height: '60vh',
            }}
          >
            {
              artis.data !== undefined && <>Hello {JSON.stringify(artis)}</>
              //   : (
              //   <p>Loading</p>
              // )
            }
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Home;
