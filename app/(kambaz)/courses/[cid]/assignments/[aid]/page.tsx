import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className="mb-1 block text-sm">
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <textarea
        id="wd-description"
        rows={5}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 font-sans"
      />
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:gap-4">
        <label
          htmlFor="wd-points"
          className="text-sm sm:w-40 sm:shrink-0 sm:pt-2 sm:text-right"
        >
          Points
        </label>
        <input
          id="wd-points"
          defaultValue={100}
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:gap-4">
        <label
          htmlFor="wd-group"
          className="text-sm sm:w-40 sm:shrink-0 sm:pt-2 sm:text-right"
        >
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="text-sm sm:w-40 sm:shrink-0 sm:pt-2 sm:text-right"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="Percentage"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="Percentage">Percentage</option>
          <option value="Letter">Letter Grade</option>
          <option value="Points">Points</option>
          <option value="GPA">GPA Scale</option>
        </select>
      </div>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:gap-4">
        <label
          htmlFor="wd-submission-type"
          className="text-sm sm:w-40 sm:shrink-0 sm:pt-2 sm:text-right"
        >
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className="mb-4 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="Online">Online</option>
            <option value="Paper">On Paper</option>
            <option value="External">External Tool</option>
          </select>
          <label className="mb-2 block font-semibold">
            Online Entry Options
          </label>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" defaultChecked />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:gap-4">
        <label
          htmlFor="wd-assign-to"
          className="text-sm sm:w-40 sm:shrink-0 sm:pt-2 sm:text-right"
        >
          Assign
        </label>
        <div className="w-full rounded border border-neutral-300 p-4">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            defaultValue="2026-09-13"
            className="mb-4 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                defaultValue="2026-09-06"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                defaultValue="2026-09-20"
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block text-sm">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={3}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 font-sans"
      />
      <hr className="mb-4" />
      <div className="flex justify-end gap-2">
        <Link
          id="wd-cancel"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          id="wd-save"
          href={`/courses/${cid}/assignments`}
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
