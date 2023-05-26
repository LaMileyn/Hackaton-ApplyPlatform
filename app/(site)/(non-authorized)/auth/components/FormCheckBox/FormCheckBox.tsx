import { TextLink } from '@/app/components';
import React, { FC } from 'react';

const FormCheckBox: FC = () => {
  return (
    <div className="mt-4">
      <input
        className="h-[1rem] w-[1rem]"
        type="checkbox"
        checked={true}
        onChange={() => {}}
      />
      <span className="ml-3">
        Я даю согласие на{' '}
        <TextLink text="обработку персональных данных" hovered href="/" /> и
        ознакомлен с{' '}
        <TextLink text="политикой конфиденциальности" hovered href="/" />
      </span>
    </div>
  );
};

export default FormCheckBox;
