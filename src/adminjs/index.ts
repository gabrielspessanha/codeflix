import AdminJS from "adminjs";
import AdminJSExpress  from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import { database } from "../database";
import { adminJsResoucers } from "./resources";
import { User } from "../models";
import bcrypt from "bcrypt"
import { locale } from "./locale";
AdminJS.registerAdapter(AdminJSSequelize)

export const adminjs = new AdminJS({
  databases: [database],
  rootPath: "/admin",
	resources: adminJsResoucers,
  branding: {
    companyName: 'CodeFlix',
    logo: '/codeflix.png',
    theme: {
      colors: {
        primary100: '#ff0043',
	      primary80: '#ff1a57',
	      primary60: '#ff3369',
	      primary40: '#ff4d7c',
		    primary20: '#ff668f',
	      grey100: '#151515',
	      grey80: '#333333',
	      grey60: '#4d4d4d',
	      grey40: '#666666',
	      grey20: '#dddddd',
	      filterBg: '#333333',
	      accent: '#151515',
	      hoverBg: '#151515',
      }
    }
  },
	locale: locale
})

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminjs, {
	authenticate: async(email, password) =>{
		const user =  await User.findOne({where: {email} })

		if (user && user.role === 'admin'){
			const matched = await bcrypt.compare(password, user.password)
			if(matched){
				return user
			}
		}
		return false
	},
	cookiePassword: '1234'
},null, {
	resave: false,
	saveUninitialized: false
})