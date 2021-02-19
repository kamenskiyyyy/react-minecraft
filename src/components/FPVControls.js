import { useRef, useEffect } from 'react';
import { extendm, useThree } from 'react-three-fiber';
import { PointerLockControls as PointerLockControlsImpl } from 'three/examples/jsm/controls/PointerLockControls';

extend({ PointerLockControls });

export const FPVControls = () => {
    const {camera, gl} = useThree();
    const controls = useRef();

    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock()
        });
    }, []);

    return (
        <PointerLockControlsImpl 
            ref={controls}
            args={[camera, gl.domElement]}
        />
    )
}