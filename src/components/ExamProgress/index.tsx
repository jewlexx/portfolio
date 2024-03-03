import { useState, type FunctionComponent, useMemo } from 'react';
import styles from './index.module.scss';

const ExamProgress: FunctionComponent = () => {
	const [marks, setMarks] = useState<number>(0);
	const [time, setTime] = useState<number>(0);
	const [spentTime, setSpentTime] = useState<number>(0);
	// const [questions, setQuestions] = createSignal<number>(0);

	const marksPerMinute = useMemo(() => {
		const mpm = marks / time;

		return isNaN(mpm) ? 0 : mpm;
	}, [marks, time]);

	return (
		<div>
			<form className={styles.form}>
				<span className={styles.questions}>
					<label>
						Total Time (minutes):{' '}
						<input
							id="time"
							type="number"
							value={time}
							onChange={(e) => setTime(parseInt(e.target.value, 10))}
							required
						/>
					</label>

					<label>
						Time Spent So Far (minutes):{' '}
						<input
							id="time-spent"
							type="number"
							value={spentTime}
							onChange={(e) => setSpentTime(parseInt(e.target.value, 10))}
							required
						/>
					</label>
				</span>
				<span className={styles.questions}>
					<label>
						Total Marks:{' '}
						<input
							id="marks"
							type="number"
							value={marks}
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

			{marksPerMinute !== 0 && (
				<div className={styles.output} id="marks-output">
					{marksPerMinute < 1 ? (
						<p>
							You have <span>{1 / marksPerMinute}</span> minutes per mark
						</p>
					) : (
						<p>
							You should be doing <span>{marksPerMinute}</span> marks per minute
						</p>
					)}
					<p>
						You should have <span>{marksPerMinute * spentTime}</span> marks completed so far
					</p>
				</div>
			)}
		</div>
	);
};

export default ExamProgress;
