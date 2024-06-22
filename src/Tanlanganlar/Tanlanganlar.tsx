import Header from "../Components/Header"

const Tanlanganlar = () => {
  return (
    <div>  
      <div>
       <Header/>
      </div>
      <p className="ml-14 mt-7 text-2xl">Избранное</p>


        <div className="px-20">

            <div className="space-y-8">
                
                <div className="flex border-b pb-4">
                    <div className="relative w-1/4">
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">- 6%</span>
                        <img src="https://placehold.co/150x150" alt="Sony WH-1000XM3" className="w-full" crossorigin="anonymous"/>
                    </div>
                    <div className="w-3/4 flex flex-col justify-between pl-4">
                        <div>
                            <h3 className="text-xl font-semibold">Sony WH-1000XM3 Беспроводные наушники</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <ul className="text-sm space-y-1">
                                <li>Платформа: Android 10</li>
                                <li>Кол-во SIM карт: 2 SIM + SD Card</li>
                                <li>Диагональ экрана: 6.5"</li>
                                <li>Камера: 48MP+8MP+5MP+5MP</li>
                                <li>Аккумулятор: 4 000 mAh</li>
                                <li>Тип матрицы: SUPER AMOLED</li>
                                <li>Габариты: ШхВхТ 142x79.0x13.5 мм, вес 140 г</li>
                            </ul>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            <button className="text-zinc-500 hover:text-zinc-700">Убрать из избранного</button>
                            <button className="text-orange-500 hover:text-orange-700">Сравнить</button>
                            <button className="text-orange-500 hover:text-orange-700">Поделиться</button>
                        </div>
                    </div>
                    <div className="w-1/4 text-right">
                        <div className="text-zinc-500 line-through">2 720 000</div>
                        <div className="text-2xl font-bold text-zinc-800">3 020 000 <span className="text-sm">сум</span></div>
                        <div className="text-sm text-zinc-500">Сезонная скидка</div>
                        <div className="flex justify-end space-x-2 mt-4">
                            <div className="w-4 h-4 bg-zinc-200 border rounded-full"></div>
                            <div className="w-4 h-4 bg-zinc-200 border rounded-full"></div>
                        </div>
                        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg">Добавить в корзину</button>
                    </div>
                </div>
        
                
                <div className="flex border-b pb-4">
                    <div className="relative w-1/4">
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">- 6%</span>
                        <img src="https://placehold.co/150x150" alt="Apple iPhone 11" className="w-full" crossorigin="anonymous"/>
                    </div>
                    <div className="w-3/4 flex flex-col justify-between pl-4">
                        <div>
                            <h3 className="text-xl font-semibold">Apple iPhone 11 8/128 GB, черный</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <ul className="text-sm space-y-1">
                                <li>Платформа: iOS 13</li>
                                <li>Кол-во SIM карт: 2 SIM + SD Card</li>
                                <li>Диагональ экрана: 6.5"</li>
                                <li>Камера: 48MP+8MP+5MP+5MP</li>
                                <li>Аккумулятор: 4 000 mAh</li>
                                <li>Тип матрицы: SUPER AMOLED</li>
                                <li>Габариты: ШхВхТ 142x79.0x13.5 мм, вес 140 г</li>
                            </ul>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            <button className="text-zinc-500 hover:text-zinc-700">Убрать из избранного</button>
                            <button className="text-orange-500 hover:text-orange-700">Сравнить</button>
                            <button className="text-orange-500 hover:text-orange-700">Поделиться</button>
                        </div>
                    </div>
                    <div className="w-1/4 text-right">
                        <div className="text-zinc-500 line-through">2 720 000</div>
                        <div className="text-2xl font-bold text-zinc-800">8 249 000 <span className="text-sm">сум</span></div>
                        <div className="text-sm text-zinc-500">Сезонная скидка</div>
                        <div className="flex justify-end space-x-2 mt-4">
                            <div className="w-4 h-4 bg-zinc-200 border rounded-full"></div>
                            <div className="w-4 h-4 bg-zinc-200 border rounded-full"></div>
                        </div>
                        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default Tanlanganlar