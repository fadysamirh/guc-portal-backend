const express = require('express')
const router = express.Router()
const {
  createDepartment,
  deleteDepartment,
  updateDepartment,
  viewAllDep,
} = require('../controllers/departments.controller')
const {
  validateCreateDepartment,
  validateDeleteDepartment,
  validateUpdateDepartment,
  ValidateViewAllDep,
} = require('../helpers/validations/departmentsValidations')
const { verifyAC } = require('../helpers/authentication/ACAuthentication') // verifies that he is AC
const { verifyHR } = require('../helpers/authentication/HRAuthentication') // verifies that he is HR

const { verifyCOOR } = require('../helpers/authentication/COORAuthentication') //verifies that token is coordinator
const { verifyHOD } = require('../helpers/authentication/HODAuthentication') //verifies that token is HOD
const { verifyINST } = require('../helpers/authentication/INSTAuthentication ') // verifies that token is Instructor
const { verifyMEM } = require('../helpers/authentication/MEMAuthentication') // verifies that token is academic member
const {
  verifyToken,
} = require('../helpers/authentication/AuthenticationMiddleWare') // verifies token helper (needed before verify user)
const { verifyUser } = require('../helpers/authentication/authUser') //verifies that user in token is same as in Account:{}

router.post(
  '/createDepartment',
  validateCreateDepartment,
  verifyToken,
  verifyUser,
  verifyHR,
  createDepartment
)
router.post(
  '/deleteDepartment',
  validateDeleteDepartment,
  verifyToken,
  verifyUser,
  verifyHR,
  deleteDepartment
)
router.post(
  '/updateDepartment',
  validateUpdateDepartment,
  verifyToken,
  verifyUser,
  verifyHR,
  updateDepartment
)

router.post(
  '/viewAllDep',
  ValidateViewAllDep,
  verifyToken,
  verifyUser,
  verifyHR,
  viewAllDep
)
module.exports = router
