import image from "./assets/photo_2021-03-29_23-51-23.jpg";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/blocks";

const text = `
Это учебный проект по созданию сайта на чистом JS без фреймверков. Стало понятно как использовать классы, стала приблизительно понятна архитектура приложения и как ее организовывать. Получил опыт работы с простым сборщиком Parcel, с менджером пакетов npm, с моделями JS. Убедился, что иду правильным путем, изучая JS по учебнику методично и внимательно, так как все понятно что тут делал)) Появилось также больше вопросовб на которые мой пытливый ум будет искать ответы) Есть чем заняться)
`;

export const model = [
  new TitleBlock("Конструктор сайтов на чистом JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      "max-width": "250px",
      height: "auto",
      "border": "5px solid purple",
      "border-radius": "50%",
    },
    alt: "Это Я",
  }),

  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Принципы SOLID и ООП в JavaScript. Упрощенно, но все же.",
      "Перехожу к написанию своего PEM проекта. Сайт себя с резюме) ",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];
