import { createSignal } from 'solid-js';
import { minutesToTime, timeToMinutes } from '../../lib/conversions';
import styles from './index.module.scss';

// We need total questions, total marks to work out marks per minute
// Then how long they've done so far

const ExamProgress = () => {
	const [marks, setMarks] = createSignal<number>(0);
	const [time, setTime] = createSignal<number>(0);
	const [questions, setQuestions] = createSignal<number>(0);

	return (
		<div>
			<form class={styles.form}>
				<span class={styles.questions}>
					<label for="time">
						Total Time:{' '}
						<input
							id="time"
							type="time"
							value={minutesToTime(time())}
							onChange={(e) => setTime(timeToMinutes(e.target.value))}
						/>
					</label>
				</span>
				<span class={styles.questions}>
					<label for="marks">
						Total Marks:{' '}
						<input
							id="marks"
							type="number"
							value={marks()}
							onChange={(e) => setMarks(parseInt(e.target.value, 10))}
						/>
					</label>{' '}
					<label for="questions">
						Total Questions:{' '}
						<input
							id="questions"
							type="number"
							value={questions()}
							onChange={(v) => setQuestions(parseInt(v.target.value, 10))}
						/>
					</label>
				</span>
			</form>

			<p>{marks() / time()} marks per minute</p>
		</div>
	);
};

export default ExamProgress;
