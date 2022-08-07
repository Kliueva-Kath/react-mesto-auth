export default function AuthForm({
  name,
  title,
  children,
  buttonText,
  onSubmit,
  isLoading,
  loadingText,
}) {
  return (
    <div class="auth-form">
      <h2 className="form__header">{title}</h2>
      <form
        className="form form_type_auth"
        name={`${name}-form`}
        onSubmit={onSubmit}
        noValidate
      >
        {children}
        <button
          className="button form__save-button form__save-button_type_auth"
          type="submit"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
