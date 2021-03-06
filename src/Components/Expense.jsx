import { formatDate } from "../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import savingsIcon from "../img/icono_ahorro.svg";
import foodIcon from "../img/icono_comida.svg";
import homeIcon from "../img/icono_casa.svg";
import miscellaneousIcon from "../img/icono_gastos.svg";
import healthIcon from "../img/icono_salud.svg";
import entertaimentIcon from "../img/icono_ocio.svg";
import subscriptionsIcon from "../img/icono_suscripciones.svg";
import { useDispatch } from "react-redux";
import { setEditExpenseAction } from "../Redux/Reducers/ExpensesReducer";

const iconDictionary = {
  savings: savingsIcon,
  food: foodIcon,
  home: homeIcon,
  miscellaneous: miscellaneousIcon,
  entertainment: entertaimentIcon,
  health: healthIcon,
  subscriptions: subscriptionsIcon,
};

const Expense = ({ expense, deleteExpense }) => {
  const { category, name, amount, id, date } = expense;
  const dispatch = useDispatch();

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() => {
          //AQUI
          dispatch(setEditExpenseAction(expense));
        }}
      >
        Edit
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={() => deleteExpense(id)}>
        Delete
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={iconDictionary[category]} alt="expense icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Added on: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
