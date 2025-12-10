-- Add new service categories from PDF
INSERT INTO service_categories (name, slug, description, icon) VALUES
('Шпакловка', 'shpaklovka', 'Качествена шпакловка за стени и тавани', 'layers'),
('Сухо строителство', 'suho-stroitelstvo', 'Окачени тавани и преградни стени от гипсокартон Knauf', 'square'),
('Подови настилки', 'podovi-nastilki', 'Монтаж на ламинат, паркет и первази', 'layers'),
('Къртене', 'kartene', 'Демонтаж и подготовка на обекта', 'wrench'),
('Иновативни покрития', 'inovativni-pokritia', 'Микроцимент, Terrazzo, Flake Floor, Stone Carpet', 'sparkles')
ON CONFLICT (slug) DO NOTHING;

-- Get category IDs for insertion
DO $$
DECLARE
  shpaklovka_id uuid;
  suho_id uuid;
  podovi_id uuid;
  kartene_id uuid;
  inovativni_id uuid;
  elektro_id uuid;
  vik_id uuid;
BEGIN
  SELECT id INTO shpaklovka_id FROM service_categories WHERE slug = 'shpaklovka';
  SELECT id INTO suho_id FROM service_categories WHERE slug = 'suho-stroitelstvo';
  SELECT id INTO podovi_id FROM service_categories WHERE slug = 'podovi-nastilki';
  SELECT id INTO kartene_id FROM service_categories WHERE slug = 'kartene';
  SELECT id INTO inovativni_id FROM service_categories WHERE slug = 'inovativni-pokritia';
  SELECT id INTO elektro_id FROM service_categories WHERE slug = 'elektro';
  SELECT id INTO vik_id FROM service_categories WHERE slug = 'vik';

  -- Шпакловка services
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (shpaklovka_id, 'Гипсова шпакловка - една ръка', 14, 14, 'кв.м', NULL),
  (shpaklovka_id, 'Гипсова шпакловка с мрежа', 22, 22, 'кв.м', NULL),
  (shpaklovka_id, 'Финишна шпакловка (Baumit, Bagar, Semin)', 19, 19, 'кв.м', NULL),
  (shpaklovka_id, 'Шпакловка със стъклофазерен воал', 29, 29, 'кв.м', NULL),
  (shpaklovka_id, 'Шпакловка на ъгли на гипсокартон', 15, 15, 'л.м', NULL),
  (shpaklovka_id, 'Машинно шлайфане', 5, 5, 'кв.м', NULL)
  ON CONFLICT DO NOTHING;

  -- Сухо строителство services  
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (suho_id, 'Окачен таван с гипсокартон, едно ниво', 48, 48, 'кв.м', NULL),
  (suho_id, 'Преградна стена с гипсокартон', 48, 48, 'кв.м', NULL),
  (suho_id, 'Суха мазилка (облицовка на стени)', 48, 48, 'кв.м', NULL),
  (suho_id, 'Окачен таван (две нива)', 67, 67, 'кв.м', NULL),
  (suho_id, 'Окачен таван (две нива, извит)', 74, 74, 'кв.м', NULL),
  (suho_id, 'Шпакловка на ъгли на гипсокартон', 12, 12, 'л.м', NULL),
  (suho_id, 'Vidifloor Solo (1x18mm) + 30mm керамзит', 86, 86, 'кв.м', NULL),
  (suho_id, 'Vidifloor Duo (2x10mm) + 30mm керамзит', 76, 76, 'кв.м', NULL),
  (suho_id, 'Полагане на XPS полистирол под или при вана', 5, 5, 'кв.м', NULL)
  ON CONFLICT DO NOTHING;

  -- Подови настилки services
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (podovi_id, 'Монтаж на ламинат', 12, 12, 'кв.м', NULL),
  (podovi_id, 'Монтаж на трислоен паркет', 29, 67, 'кв.м', NULL),
  (podovi_id, 'Монтаж на первази', 6, 14, 'л.м', NULL),
  (podovi_id, 'Лепене на плочки гранитогрес', 67, 143, 'кв.м', NULL)
  ON CONFLICT DO NOTHING;

  -- Електро - допълнителни услуги от PDF
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (elektro_id, 'Ел. пакет за едностаен апартамент', 3895, 3895, 'бр.', 'Доставка и монтаж'),
  (elektro_id, 'Ел. пакет за двустаен апартамент', 5225, 5225, 'бр.', 'Доставка и монтаж'),
  (elektro_id, 'Ел. пакет за тристаен апартамент', 6080, 6080, 'бр.', 'Доставка и монтаж'),
  (elektro_id, 'Ел. пакет за къща', 14250, 14250, 'бр.', 'Доставка и монтаж'),
  (elektro_id, 'Направа работен изход (силнотокова/слаботокова)', 57, 57, 'бр.', NULL),
  (elektro_id, 'Полагане на гофрирана тръба + крепежи', 4, 4, 'л.м', NULL),
  (elektro_id, 'Монтаж на PVC канали (20-60mm)', 11, 11, 'л.м', NULL),
  (elektro_id, 'Монтаж на PVC канали (80-120mm)', 13, 13, 'л.м', NULL),
  (elektro_id, 'Развиване и свързване (на 4 точки)', 57, 57, 'бр.', NULL),
  (elektro_id, 'Монтаж на контролен електромер - монофазен', 143, 143, 'бр.', NULL),
  (elektro_id, 'Монтаж на контролен електромер - трифазен', 190, 190, 'бр.', NULL),
  (elektro_id, 'Захранване на ел.уред (фурна, котлон, бойлер)', 48, 48, 'бр.', NULL),
  (elektro_id, 'Монтаж на ключове/контакти (скрит монтаж)', 8, 8, 'бр.', NULL),
  (elektro_id, 'Монтаж на ключове/контакти (открит монтаж)', 10, 10, 'бр.', NULL),
  (elektro_id, 'Монтаж на ел. табло/разклонителна кутия', 62, 62, 'бр.', NULL),
  (elektro_id, 'Монтаж на аплик/полилей/лампа', 38, 38, 'бр.', NULL),
  (elektro_id, 'Монтаж на луна (до ф75mm)', 14, 14, 'бр.', NULL),
  (elektro_id, 'Апартаментно табло (двустаен/тристаен)', 295, 295, 'бр.', NULL),
  (elektro_id, 'Апартаментно табло (четиристаен)', 470, 470, 'бр.', NULL)
  ON CONFLICT DO NOTHING;

  -- Къртене services
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (kartene_id, 'Къртене на ъгъл в тухла', 10, 10, 'л.м', NULL),
  (kartene_id, 'Къртене на ъгъл в бетон', 19, 19, 'л.м', NULL),
  (kartene_id, 'Пробиване на отвор за контакт в тухла', 14, 14, 'бр.', NULL),
  (kartene_id, 'Пробиване на отвор за контакт в бетон', 24, 24, 'бр.', NULL),
  (kartene_id, 'Къртене за отстраняване на късо съединение', 48, 48, 'бр.', NULL),
  (kartene_id, 'Къртене на бетон', 323, 475, 'куб.м', NULL),
  (kartene_id, 'Къртене на преградна стена от тухла', 143, 143, 'кв.м', NULL),
  (kartene_id, 'Къртене на фаянс/мазилка/теракот', 33, 35, 'кв.м', NULL),
  (kartene_id, 'Къртене на замазка до 5см', 24, 24, 'кв.м', NULL),
  (kartene_id, 'Изнасяне на строителни отпадъци', 7, 19, 'торба', NULL),
  (kartene_id, 'Пробиване на отвори (бетон/тухла)', 33, 285, 'бр.', 'Зависи от размера')
  ON CONFLICT DO NOTHING;

  -- ВиК допълнителни услуги
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (vik_id, 'Направа на хоризонтален развод', 81, 81, 'точка', NULL),
  (vik_id, 'Смяна на вертикален щранг ВиК', 238, 333, 'л.м', NULL),
  (vik_id, 'Монтаж на структура за вграждане', 266, 266, 'бр.', NULL),
  (vik_id, 'Монтаж на моноблок/писоар', 95, 95, 'бр.', NULL),
  (vik_id, 'Монтаж на душ кабина', 238, 238, 'бр.', NULL),
  (vik_id, 'Монтаж на лентов сифон', 285, 285, 'бр.', NULL),
  (vik_id, 'Монтаж на бойлер (обемен/проточен)', 81, 114, 'бр.', NULL),
  (vik_id, 'Монтаж на сифон/батерия', 48, 81, 'бр.', NULL),
  (vik_id, 'Цялостно изграждане на ВиК', 333, 333, 'точка', NULL),
  (vik_id, 'Монтаж/подвързване на котел/камина', 67, 67, 'бр.', NULL),
  (vik_id, 'Изграждане на отоплителна система', 475, 475, 'бр.', NULL)
  ON CONFLICT DO NOTHING;

  -- Иновативни покрития
  INSERT INTO service_prices (category_id, service_name, price_min, price_max, unit, notes) VALUES
  (inovativni_id, 'Микроцимент', 67, 67, 'кв.м', 'Безшевно покритие за стени и подове'),
  (inovativni_id, 'Terrazzo (Мозайка)', 133, 133, 'кв.м', 'Мозаечни подове с естествени камъни'),
  (inovativni_id, 'Flake Floor', 95, 95, 'кв.м', 'Декоративна настилка с цветни флейки'),
  (inovativni_id, 'Stone Carpet (Каменен килим)', 114, 114, 'кв.м', 'Идеално за тераси и балкони')
  ON CONFLICT DO NOTHING;

END $$;