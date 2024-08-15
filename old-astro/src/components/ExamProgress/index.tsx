import { createSignal, createMemo } from 'solid-js';
import styles from './index.module.scss';

// We need total questions, total marks to work out marks per minute
// Then how long they've done so far

const ExamProgress = () => {
	const [marks, setMarks] = createSignal<number>(0);
	const [time, setTime] = createSignal<number>(0);
	const [spentTime, setSpentTime] = createSignal<number>(0);
	// const [questions, setQuestions] = createSignal<number>(0);

	const marksPerMinute = createMemo(() => {
		const mpm = marks() / time();

		return isNaN(mpm) ? 0 : mpm;
	});

	return (
		<div>
			<form class={styles.form}>
				<span class={styles.questions}>
					<label>
						Total Time (minutes):{' '}
						<input
							id="time"
							type="number"
							value={time()}
							onChange={(e) => setTime(parseInt(e.target.value, 10))}
							required
						/>
					</label>

					<label>
						Time Spent So Far (minutes):{' '}
						<input
							id="time-spent"
							type="number"
							value={spentTime()}
							onChange={(e) => setSpentTime(parseInt(e.target.value, 10))}
							required
						/>
					</label>
				</span>
				<span class={styles.questions}>
					<label>
						Total Marks:{' '}
						<input
							id="marks"
							type="number"
							value={marks()}
							onChange={(e) => setMarks(parseInt(e.target.value, 10))}
							required
						/>
					</label>
					{/* <label>
						Total Questions:{' '}
						<input
							id="questions"
							type="number"
							value={questions()}
							onChange={(v) => setQuestions(parseInt(v.target.value, 10))}
						/>
					</label> */}
				</span>
			</form>

			{marksPerMinute() !== 0 && (
				<div class={styles.output} id="marks-output">
					{marksPerMinute() < 1 ? (
						<p>
							You have <span>{1 / marksPerMinute()}</span> minutes per mark
						</p>
					) : (
						<p>
							You should be doing <span>{marksPerMinute()}</span> marks per minute
						</p>
					)}
					<p>
						You should have <span>{marksPerMinute() * spentTime()}</span> marks completed so far
					</p>
				</div>
			)}
		</div>
	);
};

export default ExamProgress;
