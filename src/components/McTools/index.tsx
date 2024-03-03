import { useState, type FunctionComponent, useMemo } from 'react';
import { useCopyToClipboard } from 'usehooks-ts';
import styles from './index.module.scss';

interface Coordinates {
	x: number;
	y: number;
	z: number;
}

const RegionFile: FunctionComponent<{ coords: Coordinates }> = ({ coords }) => {
	const [_, copy] = useCopyToClipboard();

	const fileName = useMemo(() => {
		return `r.${Math.floor(coords.x / 512)}.${Math.floor(coords.z / 512)}.mca`;
	}, [coords]);

	return (
		<p>
			Region File:{' '}
			<span
				className={styles.fileDisplay}
				onClick={async () => {
					await copy(fileName);
				}}
			>
				{fileName}
			</span>
		</p>
	);
};

const MCTools: FunctionComponent = () => {
	const [coords, setCoords] = useState<Coordinates>({
		x: 0,
		y: 0,
		z: 0,
	});

	return (
		<main>
			<form className={styles.form}>
				{Object.keys(coords).map((_key) => {
					const key = _key as 'x' | 'y' | 'z';
					return (
						<label>
							{key.toUpperCase()}
							<input
								type="number"
								value={coords[key]}
								onChange={(e) => setCoords({ ...coords, [key]: parseFloat(e.target.value) })}
							/>
						</label>
					);
				})}
			</form>

			<RegionFile coords={coords} />
		</main>
	);
};

export default MCTools;
