# Shop Application

Aplikacja sklepu internetowego umożliwiająca użytkownikom przeglądanie produktów, dodawanie ich do koszyka, składanie zamówienia oraz podsumowanie zakupów. Jest to prosta aplikacja stworzona w React z wykorzystaniem TypeScript.

## Opis

Aplikacja składa się z kilku głównych funkcjonalności:

- **Przeglądanie produktów** – użytkownicy mogą przeglądać listę dostępnych produktów, które zawierają nazwę, cenę oraz opcję dodania do koszyka.
- **Koszyk** – użytkownicy mogą dodawać produkty do koszyka, modyfikować ich ilość, a także usuwać przedmioty. Koszyk wyświetla sumę częściową oraz końcową wartość zamówienia.
- **Podsumowanie zamówienia** – użytkownicy mogą przejść do strony podsumowania, gdzie widzą listę przedmiotów, łączną cenę oraz mogą sfinalizować zamówienie.
- **Składanie zamówienia** – po zatwierdzeniu zamówienia użytkownik widzi komunikat o jego pomyślnym złożeniu oraz możliwość powrotu do listy produktów.

Aplikacja używa React Router do zarządzania nawigacją między stronami oraz Vite jako bundler.

## Technologie

- **React** – biblioteka do budowy interfejsu użytkownika.
- **TypeScript** – język programowania z bezpiecznym typowaniem.
- **React Router** – do zarządzania nawigacją.
- **CSS** – do stylizacji aplikacji.
- **Vite** – szybki bundler do środowiska deweloperskiego.
- **GitHub Pages** – do hostowania aplikacji online.

## Założenia i podejście

Aplikacja jest zaprojektowana z myślą o prostocie i łatwości użycia. Główne założenia to:

1. **Użycie komponentów** – aplikacja składa się z wielu niezależnych komponentów.
2. **Stan aplikacji** – dane koszyka są przechowywane w stanie komponentów nadrzędnych.
3. **Minimalizm** – brak zewnętrznych bibliotek do zarządzania stanem (np. Redux), aby uprościć implementację.


## Struktura repozytorium

   Repozytorium zawiera aplikację w podfolderze `shop-application/`. Taka struktura została przyjęta celowo, aby umożliwić przyszłą rozbudowę projektu, np. o testy, dokumentację czy inne elementy.

   Wszystkie pliki źródłowe aplikacji (HTML, CSS, TypeScript) oraz pliki konfiguracyjne Vite i zależności npm znajdują się właśnie w tym podfolderze.

## Instalacja

1. **Sklonuj repozytorium:**

   ```bash
   git clone https://github.com/mikolajburdak/ShopApplication.git
   cd ShopApplication/shop-application
   ```

2. **Zainstaluj zależności:**

   ```bash
   npm install
   ```

3. **Uruchom aplikację w trybie deweloperskim:**

   ```bash
   npm run dev
   ```

## Komendy

- `npm run dev` – uruchamia aplikację w trybie deweloperskim.
- `npm run build` – buduje aplikację do folderu `dist`.
- `npm run preview` – podgląd wersji produkcyjnej aplikacji lokalnie.
- `npm run deploy` – publikuje aplikację na GitHub Pages.

## Deploy

## Deploy

Aplikacja jest dostępna online na GitHub Pages pod adresem:

[https://mikolajburdak.github.io/ShopApplication/](https://mikolajburdak.github.io/ShopApplication/)

Aby przejść do strony głównej aplikacji, kliknij nazwę sklepu w górnej części strony, która przekieruje Cię na stronę główną sklepu.

## Autor

- **Mikołaj Burdak** – twórca aplikacji
