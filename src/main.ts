// // базовые типы
// let firstName: string = 'Max'
// let age: number = 25
// let isOwner: boolean = true

// let profile: undefined = undefined
// let city: null = null

// let isHasGirlFriend: unknown = null

// let dogName: any = '234'

// // структура объектов

// const userProfile: {
// 	firstName: string
// 	age: number
// 	isOwner: boolean
// } = {
// 	age: 25,
// 	firstName: 'Arthur',
// 	isOwner: true,
// }

// массивы
// const numbers: number[] = [1, 2, 3, 4, 5, 6]
// const anything: any[] = [1, 2, 3, true, false, 'tehrer']

// //  кортеж
// const numbers2: [number, number] = [1, 2]

// function getAge(name?: string): number {
// 	return 25
// }

// const getAge2 = (fname?: string): number => 25

// REST

// function getFullName(firstName: string, ...names: string[]) {
// 	return firstName + ' ' + names.join(' ')
// }

/* Функциональная перегрузка */
// них не пон

// классы и типы

// class Animal {
// 	private name: string

// 	constructor(name: string) {
// 		this.name = name
// 	}

// 	getName() {
// 		return this.name
// 	}
// }

// const CAT = new Animal('catss')

// интерфейсы
// interface IProfile extends IWork {
// 	name: string
// 	age: number
// 	isOwner: boolean
// }

// interface IWork {
// 	place: string
// }

// const profile2: IProfile = {} as IProfile

// типы

// type TProfile = {
// 	name: string
// 	age: number
// 	isOwner: boolean
// } & TWork

// type TWork = {
// 	place: string
// }

// const profile2: TProfile = {} as TProfile

// enum

// enum Colors {
// 	RED,
// 	GREEN,
// 	BLUE,
// }
// enum Tokens {
// 	accessToken,
// 	refreshToken,
// }

// const primary: Colors = Colors.GREEN

// const token: Tokens = Tokens.accessToken

// утверждения (Assertions)
// const someValue: any = 'hello23'
// const strLength: number = (someValue as string).length

// generic (обобщения) - обычные аргументы функции, который может быть динамичным: строкой, числом и т.д

// function getCar<T extends string>(name: T): T {
// 	return name
// }
const arr: string[] = ['str']