'use client';

import { Button, Container, HorisontalAdd } from '@/app/components';
import { useParams, useRouter } from 'next/navigation';
import React, { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import TestItem from './TestItem/TestItem';
import { initalQuestionTemplate, initialTestTemplate } from './store';
import useTest from './hooks/useTest';

const TestTemplate: FC = () => {
  const { id } = useParams();
  const router = useRouter();
  const {
    addQuestion,
    addVariant,
    changeEditMode,
    changeQuestion,
    changeTestDescription,
    changeTestTitle,
    deleteQuestion,
    isEditMode,
    testData,
  } = useTest(id ? initialTestTemplate : initialTestTemplate);

  return (
    <Container>
      <div className="mb-4">
        <Button
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
          onClick={() => router.back()}
        >
          Назад
        </Button>
      </div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h1 className="text-4xl text-primary-500 mb-2">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Название теста"
              html={testData?.title || ''}
              onChange={(e) => changeTestTitle(e.target.value)}
              disabled={false}
            />
          </h1>
          <h1 className="text-xl text-system-600  font-normal">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Описание теста"
              html={testData?.description || ''}
              onChange={(e) => changeTestDescription(e.target.value)}
              disabled={false}
            />
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={addQuestion}>
            Добавить шаблон
          </Button>
          <Button>Сохранить</Button>
        </div>
      </div>
      <div className="mt-5">
        {testData?.questions.map((question, i) => (
          <TestItem
            question={question}
            key={i}
            addVariant={addVariant}
            changeQuestion={changeQuestion}
            deleteQuestion={deleteQuestion}
            isEditMode={isEditMode}
          />
        ))}
      </div>
      <div className="mt-7">
        <HorisontalAdd
          btnText="Добавить шаблон"
          onClick={() => addQuestion()}
        />
      </div>
    </Container>
  );
};

export default TestTemplate;
