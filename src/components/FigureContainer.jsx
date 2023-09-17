import { Canvas } from '@react-three/fiber';
import Cone from './Cone';
import styles from './FigureContainer.module.css';

function FigureContainer({ geometryArgs }) {
  return (
    <div className={styles.figureContainer}>
      <Canvas>
        <Cone geometryArgs={geometryArgs} />
        <directionalLight
          position={[40, 60, 15]}
          color="#fafafa"
          intensity={1.1}
        />
      </Canvas>
    </div>
  );
}

export default FigureContainer;
