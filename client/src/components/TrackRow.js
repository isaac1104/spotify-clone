import React from 'react';
import { Icon, Tag, Typography } from 'antd';

const { Title } = Typography;
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1em'
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
};

const TrackRow = ({ data }) => {
  console.log(data);
  const { album, artists, name, explicit, duration_ms } = data;
  const convertMsToMinSec = ms => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  return (
    <div style={styles.container} className='track-row'>
      <div style={styles.infoContainer}>
        <Icon type='play-circle' />
        <div>
          <Title level={4}>{name}</Title>
          <Typography>
            {explicit ? <Tag>Explicit</Tag> : null}
            {artists.map(artist => {
              if (artists.indexOf(artist) === artists.length - 1) {
                return artist.name;
              } else {
                return `${artist.name}, `;
              }
            })} - {album.name}
          </Typography>
        </div>
      </div>
      <div>
        <Typography>{convertMsToMinSec(duration_ms)}</Typography>
      </div>
    </div>
  );
};

export default TrackRow;
