import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import categories from '../categories';
import { useEffect, useState } from 'react';

const schema = z.object({
  description: z.string().min(3, {message: 'Description should be at least 3 characters.'}).max(50),
  amount: z.number({invalid_type_error: 'Amount is required.'}).min(0.01).max(100_000),
  category: z
    .enum(categories, {
      errorMap: () => ({message: "Category is required"})
    })
    .refine((value) => categories.includes(value), {
      message: 'Invalid category selected',
    }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSubmit: (expense: Expense) => void,
  expenses: Expense[]
}


const ExpenseForm = ({onSubmit, expenses}: Props) => {
  const [newID, setNewID] = useState(0);

  /* Note: useEffect goes off whenever there is a change */
  useEffect(() => {
    if (expenses.length > 0) {
      const maxID = Math.max(...expenses.map((expense) => expense.id));
      setNewID(maxID + 1);
    } else {
      setNewID(1);
    }
  }, [expenses]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form action="" onSubmit={handleSubmit((data) => {setNewID(3); onSubmit({...data, id: newID}); reset()})}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            {...register('description')}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className="form-control"
            {...register('amount', {valueAsNumber: true})}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select id="category" className="form-select" {...register('category')}>
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
