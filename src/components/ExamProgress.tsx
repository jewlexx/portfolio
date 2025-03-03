"use client";

import { useMemo, useState } from "react";

// We need total questions, total marks to work out marks per minute
// Then how long they've done so far

export default function ExamProgress() {
  const [marks, setMarks] = useState(0);
  const [time, setTime] = useState(0);
  const [timeSpent, setSpentTime] = useState(0);
  // const [questions, setQuestions] = createSignal<number>(0);

  const marksPerMinute = useMemo(() => {
    const mpm = marks / time;

    return isNaN(mpm) ? 0 : mpm;
  }, [marks, time]);

  return (
    <div>
      <form className="flex flex-col items-center justify-center *:w-full">
        <span className="flex">
          <label className="m-4 flex flex-col items-center text-lg font-bold">
            Total Time (minutes):{" "}
            <input
              id="time"
              type="number"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value, 10))}
              required
            />
          </label>

          <label className="m-4 ml-8 flex flex-col items-center text-lg font-bold">
            Time Spent So Far (minutes):{" "}
            <input
              id="time-spent"
              type="number"
              value={timeSpent}
              onChange={(e) => setSpentTime(parseInt(e.target.value, 10))}
              required
            />
          </label>
        </span>
        <span className="flex">
          <label className="m-4 flex flex-col items-center text-lg font-bold">
            Total Marks:{" "}
            <input
              className="rounded-xl bg-gray-300 p-4"
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
        <div
          className="[&_span]:text-yellow-orange flex w-full flex-col items-center justify-center text-lg font-bold"
          id="marks-output"
        >
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
            You should have <span>{marksPerMinute * timeSpent}</span> marks
            completed so far
          </p>
        </div>
      )}
    </div>
  );
}
