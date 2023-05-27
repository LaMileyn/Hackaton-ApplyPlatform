import { ResumeBlockFull, ResumeFull, ResumeStroke } from '@/app/types/resumes';
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

type ContextType = {
  isEditing: boolean;
  resume: ResumeFull | undefined;
  updateTitle?: (title: string) => void;
  updateAbout?: (about: string) => void;
  updateStroke?: (
    blockId: number,
    strokeId: number,
    property: keyof ResumeStroke,
    newValue: string
  ) => void;
  updateBlock?: (newBlock: ResumeBlockFull) => void;
  addStroke?: (blockId: number) => void;
  addBlock?: () => void;
  deleteBlock?: (blockId: number) => void;
  deleteStroke?: (blockId: number, strokeId: number) => void;
  setResumeData?: (data: ResumeFull) => void;
  setEditMode?: (mode: boolean) => void;
};

const ResumeFormContext = createContext<ContextType>({
  isEditing: false,
  resume: undefined,
});

const ResumeFormContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<ContextType>({
    isEditing: false,
    resume: undefined,
  });

  const updateTitle = useCallback(
    (newTitle: string) => {
      if (!state.resume) return;
      const updatedResume: ResumeFull = {
        ...state.resume,
        title: newTitle,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );
  const updateAbout = useCallback(
    (newAbout: string) => {
      if (!state.resume) return;
      const updatedResume: ResumeFull = {
        ...state.resume,
        about: newAbout,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );

  const setResumeData = useCallback((data: ResumeFull) => {
    setState((prev) => ({ ...prev, resume: data }));
  }, []);
  const updateStroke = useCallback(
    (
      blockId: number,
      strokeId: number,
      property: keyof ResumeStroke,
      newValue: string
    ) => {
      if (!state.resume) return;
      const updatedBlocks = state.resume.blocks.map((block) =>
        block.ID === blockId
          ? {
              ...block,
              strokes: block.strokes.map((stroke) =>
                stroke.ID === strokeId
                  ? {
                      ...stroke,
                      [property]: newValue,
                    }
                  : stroke
              ),
            }
          : block
      );
      const updatedResume: ResumeFull = {
        ...state.resume,
        blocks: updatedBlocks,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );

  const updateBlock = useCallback(
    (newBlock: ResumeBlockFull) => {
      if (!state.resume) return;
      const updatedBlocks = state.resume.blocks.map((block) =>
        block.ID === newBlock.ID ? newBlock : block
      );
      const updatedResume: ResumeFull = {
        ...state.resume,
        blocks: updatedBlocks,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );

  const addBlock = useCallback(() => {
    if (!state.resume) return;
    const emptyBlock: ResumeBlockFull = {
      ID: new Date().valueOf(),
      title: '',
      strokes: [
        {
          ID: new Date().valueOf(),
          dateTo: '',
          dateFrom: '',
          subtitle: '',
          title: '',
          description: '',
        },
      ],
    };
    const updatedBlocks = [...state.resume.blocks, emptyBlock];
    const updatedResume: ResumeFull = {
      ...state.resume,
      blocks: updatedBlocks,
    };
    setState((prev) => ({ ...prev, resume: updatedResume }));
  }, [state]);

  const addStroke = useCallback(
    (blockId: number) => {
      if (!state.resume) return;
      const emptyStroke = {
        ID: new Date().valueOf(),
        dateTo: '',
        dateFrom: '',
        subtitle: '',
        title: '',
        description: '',
      };
      const updatedBlocks = state.resume.blocks.map((block) =>
        block.ID === blockId
          ? {
              ...block,
              strokes: [...block.strokes, emptyStroke],
            }
          : block
      );
      const updatedResume: ResumeFull = {
        ...state.resume,
        blocks: updatedBlocks,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );

  const deleteStroke = useCallback(
    (blockId: number, strokeId: number) => {
      if (!state.resume) return;
      const updatedBlocks = state.resume.blocks.map((block) =>
        block.ID === blockId
          ? {
              ...block,
              strokes: block.strokes.filter((stroke) => stroke.ID !== strokeId),
            }
          : block
      );
      const updatedResume: ResumeFull = {
        ...state.resume,
        blocks: updatedBlocks,
      };
      setState((prev) => ({ ...prev, resume: updatedResume }));
    },
    [state]
  );
  const deleteBlock = useCallback((blockId: number) => {}, []);
  const setEditMode = useCallback((mode: boolean) => {
    setState((prev) => ({ ...prev, isEditing: mode }));
  }, []);

  return (
    <ResumeFormContext.Provider
      value={{
        isEditing: state.isEditing,
        resume: state.resume,
        addBlock,
        addStroke,
        deleteBlock,
        deleteStroke,
        updateAbout,
        updateTitle,
        updateBlock,
        updateStroke,
        setResumeData,
        setEditMode,
      }}
    >
      {children}
    </ResumeFormContext.Provider>
  );
};

export function useResumeContext() {
  return useContext(ResumeFormContext);
}

export default ResumeFormContextProvider;
