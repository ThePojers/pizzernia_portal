# Dashboard

- '/'
  statyki dzisijeszych zamówień (zdalne i lokalne),
  lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- '/login'
  pola na login i hasło
  guzik do zalodowania(linkd o dashboardu)

# Widok dostępności stolikó

- '/tables'
  wybór daty i godziny
  tabela s zlistrą rezeweracji oraz wydarzeń
    kazda kolumna = 1 stolik
    każdy wiersz = 30 minut
    ma przypominać widok tygodnia w kalendarzu google gdzie w kolumnach zamiast dni są różne stoliki
    po kliknieciu rezerwacji lub eventu,  przechodzimy na strone szczegółów
- '/tables/booking/:id'
  musi zawierac wszsytkie informacje dotyczace rezerwacji
  umożliwia edycje i zapisanie zmian
- '/tables/booking/new'
  analogicznie jak poywyżej bez początkowych informacji
- '/tables/events/:id'
  analogicznie jak booking id ale dla eventów
- '/tables/events/new'
  analogicznie jak booking new ale dla evcentów

# Widok kelnera

- '/waiter'
  tablela
    w wierszach stoliki
    w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    w ostateniej kolumnie dostępne akcje dla danego stolika
- '/waiter/order/new'
  numer stolika (edytowalny)
  menu produktów
  opcje wybranego produktu
  zamówienie (zamówione produkty z opcjami i ceną)
  kwotę zamówienia
- '/waiter/order/:id'
  jak powyżej

# Widok kuchni

- '/kitchen'
 bardzo czytelna
 wyswietlac liste zamówień w kolejności złożenia
 lista musi zawierac numer stolika ( lub zamowienia zdalnego ) oraz pelne informacje dotyczace zamówionych
