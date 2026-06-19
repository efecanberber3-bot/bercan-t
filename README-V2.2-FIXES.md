# Ber Can't V2.2 Hızlı Düzeltme Paketi

Bu paket iki hatayı düzeltir:

1. Ana sayfadaki **Başvuruyu Başlat** ve hero alanındaki **Koçluğa Başla** butonları artık Shopier'e gitmez; `login.html#register` kayıt alanına yönlenir.
2. Koç kontrol merkezinde öğrencilerin görünmemesi için Supabase RLS erişim düzeltmesi eklendi.

## GitHub'a yüklenecek dosyalar

- `index.html`
- `js/admin.js`
- `admin.js`
- `schema.sql`
- `supabase/schema.sql`
- `SQL-KOC-OGRENCI-ERISIM-DUZELTMESI.sql`

## Çok önemli Supabase adımı

GitHub dosyalarını yüklemek buton yönlendirmesini düzeltir; fakat koçların öğrencileri görmesi için Supabase içinde SQL çalışması gerekir.

Supabase > SQL Editor bölümüne girip `SQL-KOC-OGRENCI-ERISIM-DUZELTMESI.sql` dosyasındaki kodu bir kez çalıştırın.

Sonra koç panelinde `Yenile` butonuna basın veya sayfayı Ctrl+Shift+R ile yenileyin.
