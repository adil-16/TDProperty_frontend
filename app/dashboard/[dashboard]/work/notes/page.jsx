import NoteCard from "@/components/Cards/NoteCard";
import AddNoteModal from "@/components/Modals/AddNoteModal";
import SearchNotes from "@/components/SearchBars/SearchNotes";


const WorkNotesPage = () => {
  return (
    <div className="flex flex-col gap-10 px-20 py-16">
      <h1 className="text-4xl font-extrabold">Work Management - Notes</h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <SearchNotes />
          <AddNoteModal />
        </div>
        <div className="flex flex-wrap gap-5">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </div>
  );
};

export default WorkNotesPage;
