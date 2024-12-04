import { Bot, InlineKeyboard } from "https://deno.land/x/grammy@v1.32.0/mod.ts";

// Создайте экземпляр класса `Bot` и передайте ему токен вашего бота.
// Токен и адрес бэкенда мы спрячем, чтобы никто не смог воспользоваться нашим ботом или взломать нас. Получим их из файла .env (или из настроек в Deno Deploy)
export const bot = new Bot(Deno.env.get("BOT_TOKEN") || ""); // export нужен, чтобы воспользоваться ботом в другом файле

// Теперь вы можете зарегистрировать слушателей на объекте вашего бота `bot`.
// grammY будет вызывать слушателей, когда пользователи будут отправлять сообщения вашему боту.

// Обработайте команду /start.
bot.command(
    "start",
    (ctx) => ctx.reply("Добро пожаловать. Запущен и работает!",{ reply_markup: keyboard }),
);

// Клавиатура будет отправлять в бота команду /about
const keyboard = new InlineKeyboard()
    .text("Обо мне", "/about");

bot.callbackQuery("/about", async (ctx) => {
    await ctx.answerCallbackQuery(); // Уведомляем Telegram, что мы обработали запрос
    await ctx.reply("Я бот? Я бот... Я Бот!");
});

// найстрока профиля

bot.command(
    "profile",
    (ctx) => ctx.reply("Заполните информацию о вас!",{ reply_markup: keyboard_hobby }, { reply_markup: keyboard_place }),
);

// добавление топиков

const keyboard_hobby = new InlineKeyboard()
    .text("Добавить моё хобби", "/hobby");

bot.callbackQuery("/hobby", async (ctx) => {
    await ctx.answerCallbackQuery(); // Уведомляем Telegram, что мы обработали запрос
    await ctx.reply("Запомнил ваше хобби!");
});

// добавление района

const keyboard_place = new InlineKeyboard()
    .text("Добавить удобный район", "/place");

bot.callbackQuery("/place", async (ctx) => {
    await ctx.answerCallbackQuery(); // Уведомляем Telegram, что мы обработали запрос
    await ctx.reply("Запомнил ваш район!");
});


// Обработайте другие сообщения.
bot.on("message", (ctx) => ctx.reply("Получил ваше сообщение: " + ctx.message.text + " !",));
