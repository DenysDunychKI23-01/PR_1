// --- ЗАВДАННЯ 1: Фільтрація та пошук у масиві об'єктів ---
const products = [
    { name: "Ноутбук", category: "Електроніка", price: 25000, inStock: 5 },
    { name: "Мишка", category: "Електроніка", price: 800, inStock: 0 },
    { name: "Стовпчик", category: "Аудіо", price: 3000, inStock: 12 },
    { name: "Клавіатура", category: "Електроніка", price: 1500, inStock: 3 }
];

function getAvailableProducts(arr) {
    return arr.filter(item => item.inStock > 0); // Використання filter()
}

function findProductByName(arr, productName) {
    const found = arr.find(item => item.name.toLowerCase() === productName.toLowerCase()); // Використання find()
    return found ? found : "Товар не знайдено";
}

console.log("--- Завдання 1 ---");
console.log("Доступні товари:", getAvailableProducts(products));
console.log("Пошук 'Мишка':", findProductByName(products, "Мишка"));


// --- ЗАВДАННЯ 2: Групування та сортування масиву об'єктів ---
const students = [
    { name: "Олександр", age: 20, grade: 85, group: "КН-21" },
    { name: "Марія", age: 19, grade: 92, group: "КН-22" },
    { name: "Іван", age: 21, grade: 74, group: "КН-21" },
    { name: "Ольга", age: 20, grade: 95, group: "КН-22" }
];

function groupBy(arr, property) {
    return arr.reduce((acc, obj) => { // Використання reduce()
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj); // Використання push()
        return acc;
    }, {});
}

function sortStudentsByGrade(arr) {
    return [...arr].sort((a, b) => b.grade - a.grade); // Використання sort()
}

console.log("--- Завдання 2 ---");
console.log("Згруповані за групами:", groupBy(students, "group"));
console.log("Відсортовані за оцінками:", sortStudentsByGrade(students));


// --- ЗАВДАННЯ 3: Статистичний аналіз даних з масиву об'єктів ---
const employees = [
    { name: "Петро", position: "Developer", salary: 30000, years: 3 },
    { name: "Анна", position: "Designer", salary: 25000, years: 5 },
    { name: "Сергій", position: "Manager", salary: 35000, years: 2 }
];

function getAverageSalary(arr) {
    if (arr.length === 0) return 0;
    const total = arr.reduce((sum, emp) => sum + emp.salary, 0); // Використання reduce()
    return total / arr.length;
}

function findMostExperiencedEmployee(arr) {
    return arr.reduce((max, emp) => emp.years > max.years ? emp : max); // Використання reduce()
}

console.log("--- Завдання 3 ---");
console.log("Середня зарплата:", getAverageSalary(employees));
console.log("Найдосвідченіший працівник:", findMostExperiencedEmployee(employees));


// --- ЗАВДАННЯ 4: Обробка та аналіз даних про книги ---
const books = [
    { title: "JavaScript для початківців", author: "Кодер", year: 2020, rating: 4.5, isRead: true },
    { title: "Чистий код", author: "Роберт Мартін", year: 2008, rating: 4.9, isRead: false },
    { title: "Алгоритми", author: "Седжвік", year: 2011, rating: 4.2, isRead: false }
];

function getUnreadBooks(arr) {
    return arr.filter(b => !b.isRead).map(b => b.title); // Використання filter()
}

function getBooksByAuthor(arr, authorName) {
    return arr.filter(b => b.author.toLowerCase() === authorName.toLowerCase())
              .sort((a, b) => a.year - b.year); // Використання sort()
}

function getTopRatedBooks(arr) {
    return arr.filter(b => b.rating > 4)
              .sort((a, b) => b.rating - a.rating); // Використання sort()
}

console.log("--- Завдання 4 ---");
console.log("Непрочитані книги:", getUnreadBooks(books));
console.log("Книги автора Седжвік:", getBooksByAuthor(books, "Седжвік"));
console.log("Топ книги (>4):", getTopRatedBooks(books));


// --- ЗАВДАННЯ 5: Фільтрація та маніпуляція вкладених об'єктів ---
const orders = [
    { orderId: 1, customer: { name: "Олена", email: "olena@gmail.com" }, items: [{price: 500}, {price: 300}], total: 800 },
    { orderId: 2, customer: { name: "Максим", email: "max@gmail.com" }, items: [{price: 1200}], total: 1200 },
    { orderId: 3, customer: { name: "Олена", email: "olena@gmail.com" }, items: [{price: 200}], total: 200 }
];

function getTotalSpentByCustomer(arr, customerName) {
    return arr.filter(o => o.customer.name.toLowerCase() === customerName.toLowerCase())
              .reduce((sum, o) => sum + o.total, 0); // Використання filter(), reduce()
}

console.log("--- Завдання 5 ---");
console.log("Загальна сума витрат клієнта Олена:", getTotalSpentByCustomer(orders, "Олена"));


// --- ЗАВДАННЯ 6: Об'єднання та оптимізація даних ---
const storeProducts = [
    { productId: 1, name: "Телефон", price: 10000 },
    { productId: 2, name: "Навушники", price: 2000 }
];

const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 5 },
    { purchaseId: 3, productId: 1, quantity: 1 }
];

function getTotalSales(prods, purchs) {
    return purchs.reduce((acc, p) => {
        const prod = prods.find(item => item.productId === p.productId); // Використання find()
        if (prod) {
            if (!acc[prod.name]) {
                acc[prod.name] = 0;
            }
            acc[prod.name] += prod.price * p.quantity;
        }
        return acc;
    }, {}); // Використання reduce()
}

console.log("--- Завдання 6 ---");
console.log("Загальний дохід від продажу товарів:", getTotalSales(storeProducts, purchases));