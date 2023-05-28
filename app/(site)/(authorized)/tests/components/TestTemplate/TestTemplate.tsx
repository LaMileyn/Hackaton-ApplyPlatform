'use client';

import { Button, Container, HorisontalAdd } from '@/app/components';
import { useParams, useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import TestItem from './TestItem/TestItem';
import { initalQuestionTemplate, initialTestTemplate } from './store';
import useTest from './hooks/useTest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { testsService } from '@/app/services';
import { TESTS_ROUTE } from '@/app/const/appRoutes';

const TestTemplate: FC = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const router = useRouter();

  const { data } = useQuery(['test', id], () => testsService.getTest(+id));

  // const { mutate: updateTest} = useMutation(testsService.updateTest)

  const { mutate: createTest } = useMutation(testsService.createTest, {
    onSuccess: (resData) => {
      router.push(TESTS_ROUTE + '/' + resData.ID);
    },
  });

  const { mutate: updateTest } = useMutation(testsService.updateTest, {
    onSuccess: (resData) => {
      queryClient.invalidateQueries(['test', id]);
      changeEditMode(false);
    },
  });

  const {
    addQuestion,
    addVariant,
    changeEditMode,
    changeQuestion,
    changeTestDescription,
    changeTestTitle,
    deleteQuestion,
    cancelChanges,
    isEditMode,
    testData,
  } = useTest(data || initialTestTemplate);

  useEffect(() => {
    if (!id) {
      changeEditMode(true);
    }
  }, [id]);

  const handleSave = () => {
    if (!id) {
      testData && createTest(testData);
    } else {
      testData &&
        updateTest({
          body: testData,
          testId: +id,
        });
    }
  };
  return (
    <Container>
      <div className="mb-4">
        <Button
          variant="transparent"
          iconLeft={<IoIosArrowBack />}
          onClick={() => router.push(TESTS_ROUTE)}
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
              disabled={!isEditMode}
            />
          </h1>
          <h1 className="text-xl text-system-600  font-normal">
            <ContentEditable
              className="outline-none editablePlaceholder"
              placeholder="Описание теста"
              html={testData?.description || ''}
              onChange={(e) => changeTestDescription(e.target.value)}
              disabled={!isEditMode}
            />
          </h1>
        </div>
        <div className="flex gap-2">
          {isEditMode && !id && (
            <Button variant="secondary" onClick={addQuestion}>
              Добавить шаблон
            </Button>
          )}
          {isEditMode && id && (
            <Button variant="secondary" onClick={cancelChanges}>
              Отмена
            </Button>
          )}
          {!isEditMode && id && (
            <Button onClick={() => changeEditMode(true)}>Редактировать</Button>
          )}
          {isEditMode && <Button onClick={handleSave}>Сохранить</Button>}
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
      {isEditMode && (
        <div className="mt-7">
          <HorisontalAdd
            btnText="Добавить шаблон"
            onClick={() => addQuestion()}
          />
        </div>
      )}
    </Container>
  );
};

export default TestTemplate;
